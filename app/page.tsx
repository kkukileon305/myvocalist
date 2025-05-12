import Link from "next/link";
import img1 from "./grammar_image1.png";
import * as motion from "motion/react-client";
import Image from "next/image";

type Color = {
  colorCode: string;
  colorName: string;
  zhuyin: string;
};

const Page = async () => {
  const colors: Color[] = [
    {
      colorName: "紅",
      colorCode: "#e81416",
      zhuyin: "ㄏㄨㄥˊ",
    },
    {
      colorName: "橙",
      colorCode: "#ffa500",
      zhuyin: "ㄔㄥˊ",
    },
    {
      colorName: "黃",
      colorCode: "#faeb36",
      zhuyin: "ㄏㄨㄤˊ",
    },
    {
      colorName: "綠",
      colorCode: "#79c314",
      zhuyin: "ㄌㄩˋ",
    },
    {
      colorName: "藍",
      colorCode: "#487de7",
      zhuyin: "ㄌㄢˊ",
    },
    {
      colorName: "靛",
      colorCode: "#4b369d",
      zhuyin: "ㄉㄧㄢˋ",
    },
    {
      colorName: "紫",
      colorCode: "#70369d",
      zhuyin: "ㄗˇ",
    },
  ];

  return (
    <>
      <header className="sticky top-0 border-b border-gray-300 bg-white z-30">
        <div className="max-w-6xl mx-auto p-4 flex justify-center gap-2 text-white">
          <Link
            href="/grammar/1"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full font-extrabold"
          >
            文法
          </Link>

          <Link
            href="/news"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full font-extrabold"
          >
            新聞
          </Link>

          <Link
            href="/list"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full"
          >
            辭典
          </Link>

          <Link
            href="/mywords"
            className="w-24 text-center block shadow bg-blue-300 hover:bg-[#213BFF] transition p-2 rounded-full"
          >
            我的詞彙
          </Link>
        </div>
      </header>
      <section className="bg-blue-300">
        <div className="max-w-6xl mx-auto px-2 py-12">
          <div className="min-h-[80lvh] flex flex-col md:flex-row justify-between items-center">
            <div>
              <motion.h1
                className="font-bold text-center text-4xl leading-12 md:leading-20 md:text-5xl md:text-left"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                함께 배우는
                <br />
                대만중국어
              </motion.h1>
              <motion.h2
                className="text-center text-sky-800 font-bold text-4xl mt-4 md:text-left leading-12"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  type: "tween",
                  duration: 1,
                }}
              >
                대만식 전통 중국어를 <br />
                배워보아요
              </motion.h2>
            </div>

            <div className="w-full max-w-[400px] flex flex-col mt-12 gap-4">
              {["이미지1", "이미지2", "이미지3"].map((d, index) => (
                <motion.div
                  key={d}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 2 + index / 5,
                    type: "tween",
                    duration: 1,
                  }}
                  className={`w-[300px] ${index !== 2 ? "min-h-[120px]" : "min-h-[180px]"} p-2 bg-white rounded-xl shadow-lg ${index % 2 !== 0 ? "ml-auto" : "mr-auto"} ${index === 1 ? "-translate-y-10" : ""} ${index === 0 ? "translate-x-4" : ""}`}
                >
                  {d}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="max-w-6xl mx-auto px-2 py-24 flex flex-col items-center md:items-start">
          <motion.h1 className="w-fit font-bold text-4xl md:text-5xl mb-20">
            소개
          </motion.h1>

          <div className="flex flex-col gap-24">
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                duration: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className="p-8 bg-gray-200 rounded-xl shadow-lg flex flex-col md:flex-row justify-between gap-8"
            >
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <p className="w-full text-4xl text-center md:text-left mb-8 font-bold text-gray-800">
                  PDF 출력가능
                </p>

                <p className="w-full text-gray-500 text-2xl text-center md:text-left leading-8">
                  PDF 버튼 클릭 후 링크를 <br /> web to pdf서비스에 입력해주세요
                </p>
              </div>
              <Image
                src={img1}
                alt={"grammar image"}
                width={1033}
                height={422}
                className="w-full md:w-1/2"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                duration: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className="p-8 bg-gray-200 rounded-xl shadow-lg flex flex-col md:flex-row-reverse justify-between gap-8"
            >
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <p className="w-full text-4xl text-center md:text-left mb-8 font-bold text-gray-800">
                  어휘 탐색
                </p>

                <p className="w-full text-gray-500 text-2xl text-center md:text-left leading-8">
                  원하는 단어를 저장할 수 있습니다
                </p>
              </div>
              <Image
                src={img1}
                alt={"grammar image"}
                width={1033}
                height={422}
                className="w-full md:w-1/2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden relative my-20">
        <motion.div
          className="flex w-[200%]"
          initial={{
            x: 0,
          }}
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 10,
            type: "tween",
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {colors.map((color) => (
            <div
              key={color.colorName}
              className={`w-1/7 py-8 flex justify-center items-center flex-col text-2xl text-white`}
              style={{
                background: color.colorCode,
              }}
            >
              <p>{color.colorName}</p>
              <span className="text-sm">{color.zhuyin}</span>
            </div>
          ))}
          {colors.map((color) => (
            <div
              key={color.colorName}
              className={`w-1/7 py-8 flex justify-center items-center flex-col text-2xl text-white`}
              style={{
                background: color.colorCode,
              }}
            >
              <p>{color.colorName}</p>
              <span className="text-sm">{color.zhuyin}</span>
            </div>
          ))}
        </motion.div>

        <div className="absolute top-0 w-full h-full z-10 rainbow" />
      </div>

      <section className="overflow-hidden">
        <div className="max-w-6xl mx-auto px-2 py-24 flex justify-center items-center">
          <motion.div
            className="w-fit bg-blue-400 rounded-full overflow-hidden"
            initial={{
              opacity: 0,
              background: "#38A9FF",
              y: 20,
              transition: {
                duration: 0.1,
              },
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              background: "#213BFF",
              transition: {
                duration: 0.1,
              },
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
              amount: 1,
            }}
          >
            <Link
              href={"/grammar/1"}
              className="block text-xl px-8 py-2 h-full text-white"
            >
              開始學習
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="overflow-hidden bg-blue-300 p-4 flex justify-center">
        <Link
          href={"https://github.com/kkukileon305/myvocalist"}
          target={"_blank"}
        >
          GitHub
        </Link>
      </footer>
    </>
  );
};

export default Page;
