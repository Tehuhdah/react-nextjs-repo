// Section 6, Vid 191 - Dynamic Pages & 'getServerSideProps'

function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  // Here, we're destructuring 'params' from 'context'
  const { params } = context;

  // 'params.uid' will be the value in the path (e.g., if the URL is '/user/1', then 'params.uid' will be '1')
  const userId = params.uid;

  // The function returns an object with a 'props' property
  // The 'props' property is an object that will be passed as props to the page component
  // In this case, the 'id' prop is set to the string "userid-" concatenated with the 'userId' value from the URL
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
