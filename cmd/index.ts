#!/usr/bin/env node

import { program } from "commander";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import { confirm, isCancel, select, spinner } from "@clack/prompts";


async function askQuestion(question: string) {
  const answer = await confirm({
    message: question,
    initialValue: true,
  });

  if (isCancel(answer)) {
    console.log(chalk.red("exiting...."));
    process.exit(0);
  }

  return answer === true;
}

async function askTask() {
  const projectType = await select({
    message: "Pick server folder.",
    options: [
      { value: "go_server", label: "GO + Fiber" },
      { value: "node_server", label: "Node + Express" },
      { value: "go_server,node_server", label: "Both" },
    ],
  });

  if (isCancel(projectType)) {
    console.log(chalk.red("exiting...."));
    process.exit(0);
  }

  return projectType.split(",");
}

function copyDefault(targetDir: string, folders: string[]) {
  folders.forEach((folder) => {
    const src = path.resolve(__dirname, `../templates/${folder}`);

    const dest = path.join(targetDir, folder);

    if (fs.existsSync(src)) {
      const s = spinner();

      s.start(`creating ${folder} template`);

      fs.cpSync(src, dest, { recursive: true });

      s.stop(`✅ ${folder} template created.`);
    }
  });
}

program
  .name("auth-template")
  .version("1.0.0")
  .description("Generate auth templates for your projects");

program
  .command("create")
  .action(async () => {
    const targetDir = path.resolve(process.cwd(), "auth-template");

    if (
      fs.existsSync(targetDir) &&
      !(await askQuestion("Found 'auth-template' folder, override?"))
    ) {
      console.error(
        "❌ Directory 'auth-template' already exists. Remove it or choose a different location."
      );

      process.exit(1);
    }

    const opts = [];

    if (await askQuestion("do you want to include client folder?")) {
      opts.push("client");
    }

    const serverFolders = await askTask();
    opts.push(...serverFolders);

    if (opts.length < 1) {
      console.log(chalk.red("All inputs must be filled!"));
    }

    try {
      console.log(chalk.green("Adding Auth templates..."));
      copyDefault(targetDir, opts);
      console.log(chalk.green("\nAuth template generated."));
    } catch (error) {
      console.log(chalk.red("Error generating auth templates: ", error));
    }
  });

program.parse(process.argv);
