export interface Article{
    id: number;
    title: string;
    content: string;
    nickname: string;
}

export interface Comments{
    id: number;
    articleId: number;
    nickname: string;
    content: string;
    commentCreatedTime: string;
}