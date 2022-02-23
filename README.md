# Table Component

Use a two dimensional array to input each cell details.
A Cell can have the following attributes:
1. editable: true makes a cell editable
2. label lets you decide the text to be displayed in each cell
3. hint displays a small tooltip to the cell bottom with the text contained
4. icon decides if an icon has to be shown at the left of each cell

Sample JSON:
JSONObj = [
  [
    { editable: false, label: "Row 1 Column 1" },
    { editable: true, label: "Row 1 Column 2" },
  ],
  [
    { editable: false, label: "Row 2 Column 1", hint: "Some Hint" },
    { editable: false, label: "Row 2 Column 2" },
  ],
  [
    {
      editable: false,
      label: "Row 3 Column 1",
      hint: "Some Hint 2",
      icon: "Alert",
    },
    { editable: false, label: "Row 3 Column 2" },
  ],
];
//TODO:
Getting Icon URL from the user
