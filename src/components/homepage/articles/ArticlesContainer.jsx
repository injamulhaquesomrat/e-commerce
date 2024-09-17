import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import React from "react";
import ArticlesCarousel from "./ArticlesCarousel";
import ArticlesBanner from "./ArticlesBanner";
import FeaturedCarousel from "../featured-brands/FeaturedCarousel";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const ArticlesContainer = () => {
  return (
    <Container className={"py-10"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center  pb-6">
            <SectionTitle className={"mb-0"}>Articles Daily</SectionTitle>
            <Link href={""}>
              <button className="text-sm flex items-center gap-2 p-2 group hover:text-primary">
                All Articles{" "}
                <FaChevronRight className="group-hover:translate-x-1 duration-300" />
              </button>
            </Link>
          </div>
          <ArticlesCarousel />
        </div>
        <div className="col-span-1 line-clamp-5">
          <ArticlesBanner />
        </div>
      </div>
    </Container>
  );
};

export default ArticlesContainer;
