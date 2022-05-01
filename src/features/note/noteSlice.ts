import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from './note.interface';

const initialState: INote = {
  noteType: 'tbr',
  time: '0',
  note: '',
};

export const noteSlice = createSlice({
  name: 'note',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateNote: (state, action: PayloadAction<any>) => {
      //   state.value += action.payload;
      state.note = action.payload;
    },
    updateTime: (state, action: PayloadAction<any>) => {
      state.time = action.payload;
    },

    updateNoteType: (state, action: PayloadAction<any>) => {
      state.noteType = action.payload;
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   //   state.value += action.payload;
    // },
  },
});
