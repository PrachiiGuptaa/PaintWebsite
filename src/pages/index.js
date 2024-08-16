'use-client'
import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Category from "@/components/Category/Category";
import Services from "@/components/Services/Services";
import Colours from "@/components/Colours/Colours";
import Dealer from "@/components/Dealer/Dealer";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
      {
        pages(where: {name: "Homepage"}) {
          nodes {
            homepage {
              banners {
                bannerImage {
                  node {
                    sourceUrl
                  }
                }
                bannersTitle
                bannerDescription
                bannerButton {
                  title
                  url
                  target
                }
              }
              homeAboutTitle
              homeAboutSubtitle
              homeAboutButton {
                target
                title
                url
              }
              homeAboutVideoImage {
                node {
                  sourceUrl
                }
              }
              homeAboutVideoUrl
              homeAboutDescription
              homeCategoryTitle
              homeCategorySubtitle
              homeServicesTitle
              homeServicesSubtitle
              homeColoursTitle
              homeColoursSubtitle
              homeColoursButton {
                target
                title
                url
              }
              homeJoinBackgroundImage {
                node {
                  sourceUrl
                }
              }
              homeJoinTitle
              homeJoinSubtitle
              homeJoinButton {
                target
                title
                url
              }
              homeJoinDescription
              blogTitle
              blogSubtitle
              categories {
                link
                title
                image {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            seo {
              canonical
              metaKeywords
              metaDesc
              title
              opengraphType
              opengraphSiteName
              opengraphTitle
              opengraphDescription
              opengraphUrl
              schema {
                raw
              }
              opengraphImage {
                mediaItemUrl
              }
            }
          }
        }
        allColourCategory(where: {slug: "popular"}) {
          nodes {
            name
            colours {
              nodes {
                slug
                colourInfo {
                  selectColor
                  colourRgb
                }
              }
            }
          }
        }
        blogs {
          nodes {
            featuredImage {
              node {
                sourceUrl
                slug
              }
            }
            slug
            title
            date
          }
        }
      }
      `;

      try {
        const response = await fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log("Data==>",data)

  const Data = data?.pages?.nodes[0]?.homepage || []
  const ColorData = data?.allColourCategory?.nodes[0]?.colours?.nodes || []
  const BlogData = data?.blogs?.nodes || []
  const HomeData = data?.pages?.nodes[0]?.homepage?.banners || []

  return (
    <>
      <Navbar />
      <section id="home" className="">
        <HomePage HomeData={HomeData}/>
      </section>
      <section
        id="about"
        className="relative px-12 border-l-8 pt-16"
        style={{
          borderImage:
            "linear-gradient(to bottom, #E70000 85%, #FF9119 100%) 1",
          borderImageSlice: 1,
        }}
      >
        <About Data={Data}/>
      </section>
      <section
        id="category"
        className="relative px-12 border-l-8 pt-16 h-auto"
        style={{
          borderImage:
            "linear-gradient(to bottom, #FF9119 85%, #F5E847 100%) 1",
        }}
      >
        <Category Data={Data} />
      </section>
      <section
        id="services"
        className="relative px-12 border-l-8 pt-16 h-auto"
        style={{
          borderImage:
            "linear-gradient(to bottom, #F5E847 85%, #00AE44 100%) 1",
          borderImageSlice: 1,
        }}
      >
        <Services Data={Data} />
      </section>
      <section
        id="colours"
        className="relative px-8 border-l-8 pt-16 h-auto"
        style={{
          borderImage:
            "linear-gradient(to bottom, #00AE44 85%, #00AE44 100%) 1",
          borderImageSlice: 1,
        }}
      >
        <Colours Data={Data} ColorData={ColorData} />
      </section>
      <section
        id="dealer"
        className="relative border-l-8 pt-16 h-auto"
        style={{
          borderImage:
            "linear-gradient(to bottom, #00AE44 85%, #00C1DE 100%) 1",
          borderImageSlice: 1,
        }}
      >
        <Dealer Data={Data} />
      </section>
      <section
        id="blogs"
        className="relative h-auto px-12 py-4 border-l-8 pt-16"
        style={{
          borderImage:
            "linear-gradient(to bottom, #00C1DE 85%, #00C1DE 100%) 1",
          borderImageSlice: 1,
        }}
      >
        <Blog BlogData={BlogData} Data={Data} />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
