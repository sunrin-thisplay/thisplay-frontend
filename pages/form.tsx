// @ts-nocheck

import Head from "next/head";
import React, { useEffect, useState , useRef } from "react";
import styled from "@emotion/styled";

import Header from "../components/HeaderV2"
import Box from "../components/box"
import Button from "../components/Button"

const Layout = styled.div`
  --main-color: rgba(51, 37, 31, 0.8);
  --gray-color: rgba(51, 37, 31, 0.2);
  width: 100vw;
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Submit = styled.div`
  width: 300px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  margin-top: 45px;
`

const Child = styled.div`
  width: 640px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ApplyTitle = styled.div`
  margin-top: 200px;
  width: 576px;
  height: 209px;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  line-height: 130%;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
`

const Desc = styled.div`
  text-align: center;
  font-size: 15px;
  line-height: 150%;
`

const ChooseUnit = styled.div`
  width: 420px;
  height: 67px;
  display: flex;
  margin-top: 64px;
  justify-content: space-between;
  margin-bottom: 64px;
`

const UnitBorder = styled.div`
  width: 136px;
  height: 47px;
  border: ${props => props.active ? "1px solid #425563" : "1px solid var(--gray-color)" };
  border-radius: ${props => props.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: ${props => props.active ? "var(--main-color)" : "white"};
  color: ${props => props.active ? "white" : "var(--main-color)"};
  cursor: pointer;
`

const SubmitNext = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.5s ease-in-out;
  align-items: center;
`

const MainQuestion = styled.div`
  
`

const Form = () => {

  const [width, setWidth] = useState()
  const widthRef = useRef();

  const clubdata = [
    {id: 1, name: "v.friends"},
    {id: 2, name: "EDCAN"},
    {id: 3, name: "MIR"},
    {id: 4, name: "IWOP"},
    {id: 5, name: "TATE"},
    {id: 6, name: "Zer0pen"},
    {id: 7, name: "RG"},
    {id: 8, name: "????????????"},
    {id: 9, name: "?????????"},
    {id: 10, name: "App:ple Pi"}
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      widthRef.current = window.innerWidth;
      const handleResize = () => (widthRef.current = window.innerWidth);
      window.addEventListener("resize", handleResize);
      setWidth(widthRef.current)

      if (club1[0] && club2[0] && club3[0]) {
        setInputInfoBoolean(true)
        setHeight("150vh")
        setMent(`
          ????????? ?????? ?????? ???????????????.
          ????????? ????????? ?????? ????????? ???????????? ??????????????????.
          ?????? ??????????????? ???????????? ????????? ???????????????.
        `)
      }

      if (inputInfo.name && inputInfo.schoolNum && inputInfo.phone) {
        setNext(true)
      }
      return () =>
        clearInterval(interval);
    })
  });

  const [height, setHeight] = useState("90vh");
  const [ment, setMent] = useState(`
    ?????? ????????? ?????? 3?????? ??????????????????.
    ?????? ????????? ?????? ?????? ???????????????"??? ???????????????.
  `)
  const [next, setNext] = useState(false);
  const [nextChapter, setNextChapter] = useState(false);
  const [club1, setClub1] = useState([false, "1??????"])
  const [club2, setClub2] = useState([false, "2??????"])
  const [club3, setClub3] = useState([false, "3??????"])

  const [inputInfoBoolean, setInputInfoBoolean] = useState(false)
  const [inputInfo, setInputInfo] = useState({
    schoolNum: "",
    name: "",
    phone: "",
  });

  const ch = () => {
    setNextChapter(true);
    setHeight("180vh");
    setMent(`
      ???????????? ?????? 
    `)
  return
  }

  return (
    <>
      <Head>
        <title>????????? ????????????</title>
        <meta
          name="description"
          content="2023 ????????????????????? ????????? thisPlay!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Layout>
        <Child>
          <ApplyTitle>
            <Title>
              ?????????????????????<br/>
              ????????? ??????
            </Title>
            <Desc>
              <pre style={{ fontFamily: "SUIT" }}>{ment}</pre>
            </Desc>
          </ApplyTitle>
          <ChooseUnit>

            <UnitBorder
              border="32px 8px 8px 32px"
              onClick={() => setClub1([true, "EDCAN"])}
              active={club1[0] === true}
            >
              {club1[1]}
            </UnitBorder>

            <UnitBorder
              border="8px 8px 8px 8px"
              onClick={() => setClub2([true, "????????????"])}
              active={club2[0] === true}
            >
              {club2[1]}
            </UnitBorder>

            <UnitBorder
              border="8px 32px 32px 8px"
              onClick={() => setClub3([true, "App:ple Pi"])}
              active={club3[0] === true}
            >
              {club3[1]}
            </UnitBorder>
          </ChooseUnit>
          { !nextChapter &&
             inputInfoBoolean &&
                <SubmitNext>
                
                  <Box
                    title="??????"
                    desc="?????? ?????????????????????."
                    placeholder="?????? 5????????? ???????????? ??????????????????"
                    height="56px"
                    value={inputInfo[1]}
                    onPaste={(event) => setInputInfo({
                      ...inputInfo,
                      schoolNum: event.target.value,
                    })}
                    onChange={(event) => setInputInfo({
                      ...inputInfo,
                      schoolNum: event.target.value,
                    })}/>

                  <Box
                    title="??????"
                    desc="?????? ?????????????????????."
                    placeholder="?????????"
                    height="56px"
                    value={inputInfo[2]}
                    onPaste={(event) => setInputInfo({
                      ...inputInfo,
                      name: event.target.value,
                    })}
                    onChange={(event) => setInputInfo({
                      ...inputInfo,
                      name: event.target.value,
                    })}/>

                  <Box
                    title="????????????"
                    desc="?????? ?????????????????????."
                    placeholder="010 1234 5678"
                    height="56px"
                    value={inputInfo[3]}
                    onPaste={(event) => setInputInfo({
                      ...inputInfo,
                      phone: event.target.value,
                    })}
                    onChange={(event) => setInputInfo({
                      ...inputInfo,
                      phone: event.target.value,
                    })}/>

                  <Submit>
                    <Button
                      onIncrement={() => ch()}
                      color={next}
                      width="130px" 
                      title="?????? ??????"
                    >
                    </Button>
                  </Submit>

                </SubmitNext>
              }
              {
                nextChapter &&
                <SubmitNext>
                  <Box
                    title="??????"
                    desc="?????? ?????????????????????."
                    placeholder="?????????"
                    height="56px"
                    value={inputInfo[2]}
                    onPaste={(event) => setInputInfo({
                      ...inputInfo,
                      name: event.target.value,
                    })}
                    onChange={(event) => setInputInfo({
                      ...inputInfo,
                      name: event.target.value,
                    })}/>
                </SubmitNext>
              }
        </Child>
      </Layout>
    </>
  )
}

export default Form