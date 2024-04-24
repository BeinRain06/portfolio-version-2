// api function fecthing working together with Google APP Script Function (https://script.google.com) to send EMail in your GMail Box

type MailsInfo = {
  name: string;
  message: string;
  email: string;
};

export const getInfosMail = (url: string): void => {
  console.log("url:", url);
  const newUrl = url + "?id=100&name=Gerard";

  const result = fetch(newUrl)
    .then((res) => res.json())
    .then((resp) => resp)
    .catch((err) => console.log("error GET Fetch:", err));

  setTimeout(async (): Promise<void> => {
    const endResult = await result;
    console.log("result:", endResult);
  }, 3000);
};

export const sendDataMail = (data: MailsInfo, url: string): void => {
  const onFire = fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((resp) => resp)
    .catch((err) => console.log("error POST Fetch:", err));

  setTimeout(async (): Promise<void> => {
    const cooked = await onFire;
    console.log("result POST:", cooked);
  }, 3000);
};
