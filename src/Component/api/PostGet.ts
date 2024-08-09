export interface Article{
    id: number;
    articleTitle: string;
    articleContent: string;
    articleNickname: string;
    articlePass: string;
    createdTime: string;
    updatedTime: string;
    articleHits: number;
}

export interface Comments{
    id: number;
    articleId: number;
    nickname: string;
    content: string;
    createdTime: string;
    updatedTime: string;
}