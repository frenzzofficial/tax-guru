import { envAppConfig } from "@/packages/env/app.env";

export default function Home() {
  return <div>Welcome to the {envAppConfig.SITE_NAME} website</div>;
}
