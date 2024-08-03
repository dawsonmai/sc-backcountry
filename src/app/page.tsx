import Header from "../components/home/Header";
import Images from "../components/home/Images";
export default function Home () {
  return (
    <div className="flex flex-col h-screen p-5">
      <Header />
      <h1 className="text-3xl md:text-4xl text-center pb-10 sm:px-28 md:px-36 lg:px-48">Dawson Mai is a student learning computer science. He also likes climbing mountains.</h1>
      <Images />
    </div>
  );
}