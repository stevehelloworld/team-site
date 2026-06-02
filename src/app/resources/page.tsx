import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description: "Access VIS Mars #32760 open-source code repositories, Onshape 3D robot models, Engineering Portfolio downloads, and brand media kit assets.",
};

export default function Page() {
  return <ResourcesClient />;
}
