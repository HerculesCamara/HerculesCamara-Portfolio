import Prismic, { getRepositoryName } from "@prismicio/client";
import {
  Client,
  ClientConfig,
  createClient,
} from "@prismicio/client";
import { HttpRequestLike } from "@prismicio/client/dist/types";
import { PreviewData } from "next";

import sm from "sm.json";

/* export const client = Prismic.createClient(`${process.env.PRISMIC_ENDPOINT}`, {
  accessToken: `${process.env.PRISMIC_ACCESS_TOKEN}`
}) */

/* export const client = Prismic.createClient(String(process.env.PRISMIC_EVIRONT), {
  accessToken: String(process.env.PRISMIC_ACCESS_TOKEN)
}) */


type GetPrismicClientProps = {
  config?: ClientConfig;
  previewData?: PreviewData;
  req?: HttpRequestLike;
};

export const repositoryName = getRepositoryName(
  sm.apiEndpoint || String(process.env.PRISMIC_API_ENDPOINT)
);

export const getPrismicClient = (props?: GetPrismicClientProps): Client => {
  const client = createClient(sm.apiEndpoint, props?.config);

  return client;
};
