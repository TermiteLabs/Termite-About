import {getRequestConfig, RequestConfig} from "next-intl/server";
import {routing} from "@/i18n/routing";

export default getRequestConfig(async ({requestLocale} : {requestLocale: Promise<string | undefined>}) => {
   let locale = await requestLocale;

   if (!locale || !routing.locales.includes(requestLocale as any)) {
      locale = routing.defaultLocale;
   }

   return {
      locale,
      messages: (await import (`@/../messages/${locale}.json`)).default
   }
});