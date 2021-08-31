import { i18n } from "boot/i18n";
import { join } from "path-cross";
import selectFiles from "select-files";
import { store } from "src/store";

import fs from "../modules/fs";

export default async function importFiles(
  folderSave: string,
  multiple = true
): Promise<readonly string[]> {
  store.commit("terminal/print", i18n.global.t("alert.import-files"));
  const files = Array.from(
    (await selectFiles({
      multiple,
    })) || []
  );

  if (files.length > 0) {
    await Promise.all(
      files.map(async (file, index) => {
        store.commit(
          "terminal/print",
          i18n.global.t("alert.saving-file-index", {
            name: file.name,
            index: index + 1,
            length: files.length,
          })
        );
        await fs.writeFile(
          join(folderSave, file.name),
          await file.arrayBuffer()
        );
      })
    );
  }

  return files.map((item) => item.name);
}