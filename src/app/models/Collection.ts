export interface Icollection {
  school: {
    color: string;
    favSub: string;
    cartoon: string;
    tripDate: Date;
  }[];

  hospital: {
    age: number;
    recommend: string;
  }[];
  general: {
    favSubs: string;
    age: number;
    flavor: string;
  }[];
}

export interface formQuestionElements {
  key: string;
  type: string;
  fieldArray?: {
    fieldGroup: formQuestionElements[];
  };
  templateOptions?: {
    label: string;
    required: boolean;
    options?: {}[];
  };
}
export interface formElements{
  formTitle: string
  formQuestions: formQuestionElements[]
}
export interface  monForms {

  name: string;
  forms: formElements []
}

