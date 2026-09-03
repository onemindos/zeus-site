import { NotFoundPage } from "@payloadcms/next/views";
import { importMap } from "../../importMap";
import config from "@payload-config";

export default function NotFound() {
  return (
    <NotFoundPage
      config={config}
      importMap={importMap}
      params={Promise.resolve({ segments: [] })}
      searchParams={Promise.resolve({})}
    />
  );
}
