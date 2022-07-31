import Link from "next/link";

const IndexPage = ({ hello, ...other }) => (
  <div className="">{JSON.stringify(other)}</div>
);
export function getServerSideProps() {
  return {
    props: {
      hello: "sada",
    },
  };
}
export default IndexPage;
