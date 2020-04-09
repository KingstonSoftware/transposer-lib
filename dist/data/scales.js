"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scales = void 0;
// scale_form = [1-7, #1-7, b1-7, *1-7, bb1-7]
const scales = {
  CScale: ["C", "D", "E", "F", "G", "A", "B", "C#", "D#", "E#", "F#", "G#", "A#", "B#", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C*", "D*", "E*", "F*", "G*", "A*", "B*", "Cbb", "Dbb", "Ebb", "Fbb", "Gbb", "Abb", "Bbb"],
  GScale: ["G", "A", "B", "C", "D", "E", "F#", "G#", "A#", "B#", "C#", "D#", "E#", "F*", "Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "G*", "A*", "B*", "C*", "D*", "E*", "F#*", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb", "Fb"],
  DScale: ["D", "E", "F#", "G", "A", "B", "C#", "D#", "E#", "F*", "G#", "A#", "B#", "C*", "Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "D*", "E*", "F#*", "G*", "A*", "B*", "C#*", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb", "Cb"],
  AScale: ["A", "B", "C#", "D", "E", "F#", "G#", "A#", "B#", "C*", "D#", "E#", "F*", "G*", "Ab", "Bb", "C", "Db", "Eb", "F", "G", "A*", "B*", "C#*", "D*", "E*", "F#*", "G#*", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb", "Gb"],
  EScale: ["E", "F#", "G#", "A", "B", "C#", "D#", "E#", "F*", "G*", "A#", "B#", "C*", "D*", "Eb", "F", "G", "Ab", "Bb", "C", "D", "E*", "F#*", "G#*", "A*", "B*", "C#*", "D#*", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb", "Db"],
  BScale: ["B", "C#", "D#", "E", "F#", "G#", "A#", "B#", "C*", "D*", "E#", "F*", "G*", "A*", "Bb", "C", "D", "Eb", "F", "G", "A", "B*", "C#*", "D#*", "E*", "F#*", "G#*", "A#*", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab"],
  "F#Scale": ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F*", "G*", "A*", "B#", "C*", "D*", "E*", "F", "G", "A", "Bb", "C", "D", "E", "F#*", "G#*", "A#*", "B*", "C#*", "D#*", "E#*", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
  "C#Scale": ["C#", "D#", "E#", "F#", "G#", "A#", "B#", "C*", "D*", "E*", "F*", "G*", "A*", "B*", "C", "D", "E", "F", "G", "A", "B", "C#*", "D#*", "E#*", "F#*", "G#*", "A#*", "B#*", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
  // "G#Scale": ["G#", "A#", "B#", "C#", "D#", "E#", "F*", "G*", "A*", "B*", "C*", "D*", "E*", "F#*", "G", "A", "B", "C", "D", "E", "F#", "G#*", "A#*", "B#*", "C#*", "D#*", "E#*", "F**", "Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  // "D#Scale": ["D#", "E#", "F*", "G#", "A#", "B#", "C*", "D*", "E*", "F#*", "G*", "A*", "B*", "C#*", "D", "E", "F#", "G", "A", "B", "C#", "D#*", "E#*", "F**", "G#*", "A#*", "B#*", "C**", "Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  // "A#Scale": ["A#", "B#", "C*", "D#", "E#", "F*", "G*", "A*", "B*", "C#*", "D*", "E*", "F#*", "G#*", "A", "B", "C#", "D", "E", "F#", "G#", "A#*", "B#*", "C**", "D#*", "E#*", "F**", "G**", "Ab", "Bb", "C", "D#", "Eb", "F", "G"],
  // E#Scale:
  // B#Scale:
  FScale: ["F", "G", "A", "Bb", "C", "D", "E", "F#", "G#", "A#", "B", "C#", "D#", "E#", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "F*", "G*", "A*", "B#", "C*", "D*", "E*", "Fbb", "Gbb", "Abb", "Bbbb", "Cbb", "Dbb", "Ebb"],
  BbScale: ["Bb", "C", "D", "Eb", "F", "G", "A", "B", "C#", "D#", "E", "F#", "G#", "A#", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab", "B#", "C*", "D*", "E#", "F*", "G*", "A*", "Bbbb", "Cbb", "Dbb", "Ebbb", "Fbb", "Gbb", "Abb"],
  EbScale: ["Eb", "F", "G", "Ab", "Bb", "C", "D", "E", "F#", "G#", "A", "B", "C#", "D#", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb", "Db", "E#", "F*", "G*", "A#", "B#", "C*", "D*", "Ebbb", "Fbb", "Gbb", "Abbb", "Bbbb", "Cbb", "Dbb"],
  AbScale: ["Ab", "Bb", "C", "Db", "Eb", "F", "G", "A", "B", "C#", "D", "E", "F#", "G#", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb", "Gb", "A#", "B#", "C*", "D#", "E#", "F*", "G*", "Abbb", "Bbbb", "Cbb", "Dbbb", "Ebbb", "Fbb", "Gbb"],
  DbScale: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "D", "E", "F#", "G", "A", "B", "C#", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb", "Cb", "D#", "E#", "F*", "G#", "A#", "B#", "C*", "Dbbb", "Ebbb", "Fbb", "Gbbb", "Abbb", "Bbbb", "Cbb"],
  GbScale: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "G", "A", "B", "C", "D", "E", "F#", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb", "Fb", "G#", "A#", "B#", "C#", "D#", "E#", "F*", "Gbbb", "Abbb", "Bbbb", "Cbbb", "Dbbb", "Ebbb", "Fbb"],
  CbScale: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C", "D", "E", "F", "G", "A", "B", "Cbb", "Dbb", "Ebb", "Fbb", "Gbb", "Abb", "Bbb", "C#", "D#", "E#", "F#", "G#", "A#", "B#", "Cbbb", "Dbbb", "Ebbb", "Fbbb", "Gbbb", "Abbb", "Bbbb"],
  testScale: [] // FbScale:
  // BbbFlatScale:
  //  ...

};
exports.scales = scales;
//# sourceMappingURL=scales.js.map