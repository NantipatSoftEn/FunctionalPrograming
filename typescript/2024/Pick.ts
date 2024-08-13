interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

//  สร้างแบบมี interface นี้มันซ้ำซ้อน

//  ทำแบบนี้สิ
type TopNavState2 = {
  userId: State["userId"];
  pageTitle: State["pageTitle"];
  recentFiles: State["recentFiles"];
};

// แต่มันยาวเกินไปเลยได้แบบนี้
type TopNavState3 = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
};

// อีกตัวอย่าง

interface SaveAction {
  type: "save";
  // ...
}
interface LoadAction {
  type: "load";
  // ...
}
type Action = SaveAction | LoadAction;

type ActionType = "save" | "load"; // Repeated types!

// You can define ActionType without repeating yourself by indexing into the Action union:
type ActionType2 = Action["type"]; // Type is "save" | "load"

// แบบนี้ดีกว่า
type ActionRec = Pick<Action, "type">;



interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

interface OptionsUpdate {
  width?: number;
  height?: number;
  color?: string;
  label?: string;
}

class UIWidget {
  constructor(init: Options) {
    /* ... */
  }
  update(options: OptionsUpdate) {
    /* ... */
  }
}


// You can construct OptionsUpdate from Options using a mapped type and keyof:
type OptionsUpdate2 = { [k in keyof Options]?: Options[k] };

type OptionsKeys = keyof Options;
// Type is "width" | "height" | "color" | "label"


//  เราก็ไม่ต้องมี  OptionsUpdate ละ
class UIWidget2 {
  constructor(init: Options) { /* ... */ }
  update(options: Partial<Options>) { /* ... */ }
}