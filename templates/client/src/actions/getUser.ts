"use server";

import { getSession } from "@/lib/session/session";
import { SERVER_URl } from "@/lib/utils";
import axios from "axios";

export async function getUser() {
  const { id } = await getSession();

  try {
    const { data } = await axios.get<UserRes>(`${SERVER_URl}/auth/user/${id}`);

    return { ...data };
  } catch (error) {
    console.error("Error signing up: ", error);

    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data.message,
        user: null,
      };
    } else {
      return { success: false, message: "Internal error", user: null };
    }
  }
}
