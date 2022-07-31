import Link from "next/link";

const IndexPage = ({ hello, ...other }) => (
  <div className="">{JSON.stringify(other)} asdasd</div>
);
export function getServerSideProps() {
  return {
    props: {
      hello: "sadasdasdasd",
    },
  };
}
export default IndexPage;
