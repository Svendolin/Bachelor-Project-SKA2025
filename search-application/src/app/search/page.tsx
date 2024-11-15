// The Search folder will end up in the URL path /search
// Page.tsx will be the content shown under the queried URL
interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
}

const Page = ({searchParams}: PageProps) => {
  const query = searchParams.query; // query is the key in the searchParams object which will be either a type string or an array of strings or undefined.
  
  if (Array.isArray(query) || !query) { // !query = is true if query is undefined
    return redirect('/') // We can not process an array of queries or an undefined query especially if its not a string. Redirect to the root page.
}

// quering logic goes here to get the database that we want to show to the user

};
export default Page;