"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scales = void 0;
// scale_form = [1-7, #1-7, b1-7, *1-7, bb1-7]
const scales = {
  C: ["C", "D", "E", "F", "G", "A", "B", "C#", "D#", "E#", "F#", "G#", "A#", "B#", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C*", "D*", "E*", "F*", "G*", "A*", "B*", "Cbb", "Dbb", "Ebb", "Fbb", "Gbb", "Abb", "Bbb"],
  G: ["G", "A", "B", "C", "D", "E", "F#", "G#", "A#", "B#", "C#", "D#", "E#", "F*", "Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "G*", "A*", "B*", "C*", "D*", "E*", "F#*", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb", "Fb"],
  D: ["D", "E", "F#", "G", "A", "B", "C#", "D#", "E#", "F*", "G#", "A#", "B#", "C*", "Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "D*", "E*", "F#*", "G*", "A*", "B*", "C#*", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb", "Cb"],
  A: ["A", "B", "C#", "D", "E", "F#", "G#", "A#", "B#", "C*", "D#", "E#", "F*", "G*", "Ab", "Bb", "C", "Db", "Eb", "F", "G", "A*", "B*", "C#*", "D*", "E*", "F#*", "G#*", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb", "Gb"],
  E: ["E", "F#", "G#", "A", "B", "C#", "D#", "E#", "F*", "G*", "A#", "B#", "C*", "D*", "Eb", "F", "G", "Ab", "Bb", "C", "D", "E*", "F#*", "G#*", "A*", "B*", "C#*", "D#*", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb", "Db"],
  B: ["B", "C#", "D#", "E", "F#", "G#", "A#", "B#", "C*", "D*", "E#", "F*", "G*", "A*", "Bb", "C", "D", "Eb", "F", "G", "A", "B*", "C#*", "D#*", "E*", "F#*", "G#*", "A#*", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab"],
  "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#", "F*", "G*", "A*", "B#", "C*", "D*", "E*", "F", "G", "A", "Bb", "C", "D", "E", "F#*", "G#*", "A#*", "B*", "C#*", "D#*", "E#*", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
  "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#", "C*", "D*", "E*", "F*", "G*", "A*", "B*", "C", "D", "E", "F", "G", "A", "B", "C#*", "D#*", "E#*", "F#*", "G#*", "A#*", "B#*", "Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
  // "G#": ["G#", "A#", "B#", "C#", "D#", "E#", "F*", "G*", "A*", "B*", "C*", "D*", "E*", "F#*", "G", "A", "B", "C", "D", "E", "F#", "G#*", "A#*", "B#*", "C#*", "D#*", "E#*", "F**", "Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  // "D#": ["D#", "E#", "F*", "G#", "A#", "B#", "C*", "D*", "E*", "F#*", "G*", "A*", "B*", "C#*", "D", "E", "F#", "G", "A", "B", "C#", "D#*", "E#*", "F**", "G#*", "A#*", "B#*", "C**", "Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  // "A#": ["A#", "B#", "C*", "D#", "E#", "F*", "G*", "A*", "B*", "C#*", "D*", "E*", "F#*", "G#*", "A", "B", "C#", "D", "E", "F#", "G#", "A#*", "B#*", "C**", "D#*", "E#*", "F**", "G**", "Ab", "Bb", "C", "D#", "Eb", "F", "G"],
  // E#:
  // B#:
  F: ["F", "G", "A", "Bb", "C", "D", "E", "F#", "G#", "A#", "B", "C#", "D#", "E#", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "F*", "G*", "A*", "B#", "C*", "D*", "E*", "Fbb", "Gbb", "Abb", "Bbbb", "Cbb", "Dbb", "Ebb"],
  Bb: ["Bb", "C", "D", "Eb", "F", "G", "A", "B", "C#", "D#", "E", "F#", "G#", "A#", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab", "B#", "C*", "D*", "E#", "F*", "G*", "A*", "Bbbb", "Cbb", "Dbb", "Ebbb", "Fbb", "Gbb", "Abb"],
  Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D", "E", "F#", "G#", "A", "B", "C#", "D#", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb", "Db", "E#", "F*", "G*", "A#", "B#", "C*", "D*", "Ebbb", "Fbb", "Gbb", "Abbb", "Bbbb", "Cbb", "Dbb"],
  Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G", "A", "B", "C#", "D", "E", "F#", "G#", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb", "Gb", "A#", "B#", "C*", "D#", "E#", "F*", "G*", "Abbb", "Bbbb", "Cbb", "Dbbb", "Ebbb", "Fbb", "Gbb"],
  Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C", "D", "E", "F#", "G", "A", "B", "C#", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb", "Cb", "D#", "E#", "F*", "G#", "A#", "B#", "C*", "Dbbb", "Ebbb", "Fbb", "Gbbb", "Abbb", "Bbbb", "Cbb"],
  Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F", "G", "A", "B", "C", "D", "E", "F#", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb", "Fb", "G#", "A#", "B#", "C#", "D#", "E#", "F*", "Gbbb", "Abbb", "Bbbb", "Cbbb", "Dbbb", "Ebbb", "Fbb"],
  Cb: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C", "D", "E", "F", "G", "A", "B", "Cbb", "Dbb", "Ebb", "Fbb", "Gbb", "Abb", "Bbb", "C#", "D#", "E#", "F#", "G#", "A#", "B#", "Cbbb", "Dbbb", "Ebbb", "Fbbb", "Gbbb", "Abbb", "Bbbb"],
  test: [] // Fb:
  // BbbFlat:
  //  ...

};
exports.scales = scales;
//# sourceMappingURL=scales.js.map