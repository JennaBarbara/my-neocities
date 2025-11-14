import { getHomePath } from "../path"

export function getWeblogPath(): string {
  return `${getHomePath()}/weblog`
}