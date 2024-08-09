
export interface CardTemplate extends ProjectTitle{
    src:string;
}

export interface IntroduceTexts{
    greetings: string;
    introduceText: string;
    backEndText: string;
    skill1: string;
    skill2: string;
    skill3: string;
}


export interface TechStacks{
    id: number;
    language: string;
    text: string;
    text2: string;
    text3?: string;
    text4?: string;
    src: string;
}

export interface articleBtns {
    title: string;
    value: string;
    src: string;    // 게시판 별 이미지 아이콘 필요
}


export interface ProjectTitle {
    id:number;
    projectTitle:string;
    projectContent:string
    projectDateStart:number;
    projectDateEnd:number;
    src:string;
}

export interface CareerTexts{
    graduate: string;
    major: string;
    date: string;
    certifications: string[];
    certificationsDate: string[];
    certificationsText: string;
    score: string;
}

export interface CodeEducationTexts{
    company: string;
    date: string;
    education: string;
    education2: string;
}

export const API_ADDRESS:string = String(process.env.REACT_APP_API_ADDRESS);