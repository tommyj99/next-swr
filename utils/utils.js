import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

// This file contains info on static generation without data, and then fetching on the client side.
/*-----------------------------------------------------------------------------------------------*/

// This is an SWR hook that can be used in any component when imported
/*------------------------------------------------------------------*/

export default function useNews(params) {
  const { mainChoice, secondaryChoice, date } = params;
  console.log("params: ", params);
  const { data, error } = useSWR(
    `http://localhost:3000/api/news?mainchoice=${mainChoice}&secondarychoice=${secondaryChoice}&date=${date}`,
    fetcher
  );

  return {
    news: data,
    isLoading: !error && !data,
    isError: error,
  };
}

// This is how the hook would be used in another component
/*------------------------------------------------------*/

// const ExampleComponent = () => {
//   const { news, isLoading, isError } = useNews();

//   if (isLoading) return <h1>Loading...</h1>; // use a skeleton here to show loading.
//   if (isError) return <h1>Something went wrong!</h1>;

//   return <h2>{news}</h2>
// };

//This is the call inside the api folder, api/news, currently
/*----------------------------------------*/

// export default async (req, res) => {

//     let url = `https://newsapi.org/v2/top-headlines?language=en&from=2022-03-24&apiKey=${process.env.NEWS_KEY}`;

//     await axios
//       .get(url)
//       .then(({ data }) => {
//         res.status(200).json({ data });
//       })
//       .catch(({ err }) => {
//         res.status(400).json({ err });
//       });
//   };
