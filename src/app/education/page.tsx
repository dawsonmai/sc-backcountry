import EducationImage from "@/components/education/EducationImage";
import Header from "@/components/global/Header";
import ArticleList from "@/components/education/ArticleList";

const education = () => {
	return (
		<div className="flex flex-col p-5">
			<div className="flex flex-col min-h-[calc(100dvh)] pb-10">
				<Header />
				<div className="flex flex-grow">
					<EducationImage />
				</div>
			</div>
			<ArticleList />
		</div>
	);
};

export default education;
