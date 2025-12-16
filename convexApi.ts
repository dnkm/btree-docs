import { type FunctionReference, anyApi } from "convex/server";
import { type GenericId as Id } from "convex/values";

export const api: PublicApiType = anyApi as unknown as PublicApiType;
export const internal: InternalApiType = anyApi as unknown as InternalApiType;

export type PublicApiType = {
  courseProgress: {
    listByUser: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
  };
  courses: {
    list: FunctionReference<"query", "public", any, any>;
    get: FunctionReference<"query", "public", { id: Id<"courses"> }, any>;
    getUsingSlug: FunctionReference<"query", "public", { slug?: string }, any>;
    create: FunctionReference<
      "mutation",
      "public",
      {
        description: string;
        level: number;
        name: string;
        slug: string;
        type?: "languages" | "algorithms" | "apps" | "games" | "aiml";
      },
      any
    >;
    update: FunctionReference<
      "mutation",
      "public",
      {
        description: string;
        id: Id<"courses">;
        isPublished: boolean;
        level: number;
        name: string;
        slug: string;
        type?: "languages" | "algorithms" | "apps" | "games" | "aiml";
      },
      any
    >;
    destroy: FunctionReference<
      "mutation",
      "public",
      { id: Id<"courses"> },
      any
    >;
    updateCourseCounts: FunctionReference<
      "mutation",
      "public",
      { id: Id<"courses"> },
      any
    >;
  };
  gemini: {
    getHint: FunctionReference<"action", "public", Record<string, never>, any>;
  };
  lectureSlides: {
    getByTopicId: FunctionReference<
      "query",
      "public",
      { topicId: Id<"topics"> },
      any
    >;
    get: FunctionReference<"query", "public", { id: Id<"lectureSlides"> }, any>;
    upsert: FunctionReference<
      "mutation",
      "public",
      {
        content: string;
        id?: Id<"lectureSlides">;
        title: string;
        topicId: Id<"topics">;
      },
      any
    >;
    destroy: FunctionReference<
      "mutation",
      "public",
      { id: Id<"lectureSlides"> },
      any
    >;
  };
  problemDetail: {
    getByProblemId: FunctionReference<
      "query",
      "public",
      { problemId: Id<"problems"> | null },
      any
    >;
  };
  problemProgress: {
    getByProbId: FunctionReference<
      "query",
      "public",
      { probId: Id<"problems"> },
      any
    >;
    getMapByCourseId: FunctionReference<
      "query",
      "public",
      { courseId?: Id<"courses"> },
      any
    >;
    create: FunctionReference<
      "mutation",
      "public",
      { courseId: Id<"courses">; problemId: Id<"problems"> },
      any
    >;
  };
  problemSubmissions: {
    listByProblemId: FunctionReference<
      "query",
      "public",
      { problemId: Id<"problems"> },
      any
    >;
  };
  problems: {
    listProblemsByCourseId: FunctionReference<
      "query",
      "public",
      { courseId?: Id<"courses"> },
      any
    >;
    listProblemsByTopic: FunctionReference<
      "query",
      "public",
      { topicId: Id<"topics"> },
      any
    >;
    listProblems: FunctionReference<
      "query",
      "public",
      {
        paginationOpts: {
          cursor: string | null;
          endCursor?: string | null;
          id?: number;
          maximumBytesRead?: number;
          maximumRowsRead?: number;
          numItems: number;
        };
      },
      any
    >;
    createProblemWithDetail: FunctionReference<
      "mutation",
      "public",
      {
        codeStubs: Array<{
          code: string;
          lang:
            | "cpp"
            | "java"
            | "python"
            | "js"
            | "text"
            | "html"
            | "react"
            | "svelte";
          readOnlyFirstNLines?: number;
          readOnlyLastMLines?: number;
        }>;
        courseId: Id<"courses">;
        difficulty: number;
        gradingType: "read" | "judge" | "livecodes";
        hints: Array<string>;
        modelAnswers: Array<{
          code: string;
          lang:
            | "cpp"
            | "java"
            | "python"
            | "js"
            | "text"
            | "html"
            | "react"
            | "svelte";
        }>;
        problemType: "essential" | "practice" | "contest";
        testCases: Array<{
          input: string;
          output: string;
          type: "sample" | "visible" | "hidden";
        }>;
        text: string;
        title: string;
        topicId: Id<"topics">;
        topicOrder: number;
      },
      any
    >;
    getByIdWithDetail: FunctionReference<
      "query",
      "public",
      { id: Id<"problems"> },
      any
    >;
    updateProblemAndDetail: FunctionReference<
      "mutation",
      "public",
      {
        id: Id<"problems">;
        problemData: {
          difficulty?: number;
          gradingType?: "read" | "judge" | "livecodes";
          isPublished?: boolean;
          problemType?: "essential" | "practice" | "contest";
          title: string;
        };
        problemDetailData?: {
          codeStubs: Array<{
            code: string;
            lang:
              | "cpp"
              | "java"
              | "python"
              | "js"
              | "text"
              | "html"
              | "react"
              | "svelte";
            readOnlyFirstNLines?: number;
            readOnlyLastMLines?: number;
          }>;
          hints: Array<string>;
          modelAnswers: Array<{
            code: string;
            lang:
              | "cpp"
              | "java"
              | "python"
              | "js"
              | "text"
              | "html"
              | "react"
              | "svelte";
          }>;
          testCases: Array<{
            input: string;
            output: string;
            type: "sample" | "visible" | "hidden";
          }>;
          text: string;
        };
      },
      any
    >;
    deleteProblem: FunctionReference<
      "mutation",
      "public",
      { id: Id<"problems"> },
      any
    >;
    getByTopicId: FunctionReference<
      "query",
      "public",
      { topicId: Id<"topics"> },
      any
    >;
    reorderProblems: FunctionReference<
      "mutation",
      "public",
      { problemIds: Array<Id<"problems">> },
      any
    >;
  };
  submission: {
    runCode: FunctionReference<
      "action",
      "public",
      {
        code: string;
        courseId: Id<"courses">;
        input?: string;
        lang:
          | "cpp"
          | "java"
          | "python"
          | "js"
          | "text"
          | "html"
          | "react"
          | "svelte";
        problemId: Id<"problems">;
      },
      any
    >;
    submitCode: FunctionReference<
      "action",
      "public",
      {
        code: string;
        courseId: Id<"courses">;
        lang:
          | "cpp"
          | "java"
          | "python"
          | "js"
          | "text"
          | "html"
          | "react"
          | "svelte";
        problemId: Id<"problems">;
        testCases: Array<{ input: string; output: string }>;
      },
      any
    >;
    submitLivecodeUrl: FunctionReference<
      "action",
      "public",
      {
        code: string;
        courseId: Id<"courses">;
        lang:
          | "cpp"
          | "java"
          | "python"
          | "js"
          | "text"
          | "html"
          | "react"
          | "svelte";
        problemId: Id<"problems">;
      },
      any
    >;
    submitCompletion: FunctionReference<
      "action",
      "public",
      { courseId: Id<"courses">; problemId: Id<"problems"> },
      any
    >;
  };
  tags: {
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    get: FunctionReference<"query", "public", { id: Id<"tags"> }, any>;
    create: FunctionReference<"mutation", "public", { name: string }, any>;
    update: FunctionReference<
      "mutation",
      "public",
      { id: Id<"tags">; name: string },
      any
    >;
    destroy: FunctionReference<"mutation", "public", { id: Id<"tags"> }, any>;
  };
  topics: {
    listByCourseSlug: FunctionReference<
      "query",
      "public",
      { slug: null | string },
      any
    >;
    list: FunctionReference<"query", "public", Record<string, never>, any>;
    listByCourseID: FunctionReference<
      "query",
      "public",
      { courseId: Id<"courses"> },
      any
    >;
    get: FunctionReference<"query", "public", { id: Id<"topics"> }, any>;
    getByCourseSlugAndTopicName: FunctionReference<
      "query",
      "public",
      { courseSlug: string; topicName: string },
      any
    >;
    create: FunctionReference<
      "mutation",
      "public",
      { courseId: Id<"courses">; name: string; tagId?: Id<"tags"> },
      any
    >;
    update: FunctionReference<
      "mutation",
      "public",
      { id: Id<"topics">; name: string; tagId?: Id<"tags"> },
      any
    >;
    destroy: FunctionReference<"mutation", "public", { id: Id<"topics"> }, any>;
    reorder: FunctionReference<
      "mutation",
      "public",
      { topicIds: Array<Id<"topics">> },
      any
    >;
  };
  userStats: { getUserStat: FunctionReference<"query", "public", any, any> };
};
export type InternalApiType = {};
