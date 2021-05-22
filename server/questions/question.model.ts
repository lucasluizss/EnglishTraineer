export default interface Question {
  id: string;
  title: string;
  answer: string[];
  questionTypeId: QuestionType;
  moduleId: string;
}

export enum QuestionType {
  MultipleChoice,
  FillInTheBlanks,
  DragAndDrop,
}
