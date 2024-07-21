export interface IntroduceTexts{
    greetings: string;
    introduceText: string;
    backEndText: string;
    skill1: string;
    skill2: string;
    skill3: string;
}

export interface CareerTexts{
    graduate: string;
    major: string;
    date: string;
    certifications: string[];
}

export interface CodeEducationTexts{
    company: string;
    date: string;
    education: string;
}

export const CareerText:CareerTexts = {
    graduate:"국립한밭대학교",
    major: "응용소프트웨어학과",
    date: "2024.03 ~ 재학중",
    certifications:["SQLD(SQL개발자)", "ADsP(데이터분석 준전문가)"],
}

export const IntroduceText:IntroduceTexts = {
    backEndText: "Back-End PortFolio",
    greetings: "안녕하세요!",
    introduceText: "저는 신입 백엔드 개발자 이인규입니다.",
    skill1: "Restful API",
    skill2: "Version Control",
    skill3: "Communication"
}

export const CodeEducation:CodeEducationTexts = {
    company: "한국ICT인재개발원",
    date: "2024.06 ~ 2024.12",
    education: "Java Spring기반 Cloud 개발자 과정"
}