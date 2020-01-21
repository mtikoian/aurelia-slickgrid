import { Column, FieldType, GridOption } from '../../aurelia-slickgrid';
import './example14.scss'; // provide custom CSS/SASS styling

export class Example14 {
  title = 'Example 14: Column Span & Header Grouping';
  subTitle = `
  This example demonstrates how to easily span a row over multiple columns & how to group header titles.
  <ul>
    <li>
      Row Colspan - (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Row-Colspan" target="_blank">Wiki docs</a>) /
      Header Grouping - (<a href="https://github.com/ghiscoding/aurelia-slickgrid/wiki/Header-Title-Grouping" target="_blank">Wiki docs</a>)
    </li>
    <li>Note that you can add Sort but remember that it will sort by the data which the row contains, even if the data is visually hidden by colspan it will still sort it</li>
  </ul>
  `;

  columnDefinitions1: Column[];
  columnDefinitions2: Column[];
  gridOptions1: GridOption;
  gridOptions2: GridOption;
  dataset1 = [];
  dataset2 = [];

  constructor() {
    this.definedGrid1();
    this.definedGrid2();
  }

  attached() {
    // populate the dataset once the grid is ready
    this.dataset1 = this.getData(500);
    this.dataset2 = this.getData(500);
  }

  definedGrid1() {
    this.columnDefinitions1 = [
      { id: 'title', name: 'Title', field: 'title', sortable: true, columnGroup: 'Common Factor' },
      { id: 'duration', name: 'Duration', field: 'duration', columnGroup: 'Common Factor' },
      { id: 'start', name: 'Start', field: 'start', columnGroup: 'Period' },
      { id: 'finish', name: 'Finish', field: 'finish', columnGroup: 'Period' },
      { id: '%', name: '% Complete', field: 'percentComplete', selectable: false, columnGroup: 'Analysis' },
      { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', type: FieldType.boolean, columnGroup: 'Analysis' }
    ];

    this.gridOptions1 = {
      enableAutoResize: false,
      enableCellNavigation: true,
      enableColumnReorder: false,
      enableSorting: true,
      createPreHeaderPanel: true,
      showPreHeaderPanel: true,
      preHeaderPanelHeight: 28,
      explicitInitialization: true,
      colspanCallback: this.renderDifferentColspan
    };
  }

  definedGrid2() {
    this.columnDefinitions2 = [
      { id: 'title', name: 'Title', field: 'title', sortable: true, columnGroup: 'Common Factor' },
      { id: 'duration', name: 'Duration', field: 'duration', columnGroup: 'Common Factor' },
      { id: 'start', name: 'Start', field: 'start', columnGroup: 'Period' },
      { id: 'finish', name: 'Finish', field: 'finish', columnGroup: 'Period' },
      { id: '%', name: '% Complete', field: 'percentComplete', selectable: false, columnGroup: 'Analysis' },
      { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', type: FieldType.boolean, columnGroup: 'Analysis' }
    ];

    this.gridOptions2 = {
      alwaysShowVerticalScroll: false, // disable scroll since we don't want it to show on the left pinned columns
      enableCellNavigation: true,
      enableColumnReorder: false,
      createPreHeaderPanel: true,
      showPreHeaderPanel: true,
      preHeaderPanelHeight: 25,
      explicitInitialization: true,
      frozenColumn: 1,
    };
  }

  getData(count: number) {
    // Set up some test columns.
    const mockDataset = [];
    for (let i = 0; i < count; i++) {
      mockDataset[i] = {
        id: i,
        num: i,
        title: 'Task ' + i,
        duration: '5 days',
        percentComplete: Math.round(Math.random() * 100),
        start: '01/01/2009',
        finish: '01/05/2009',
        effortDriven: (i % 5 === 0)
      };
    }
    return mockDataset;
  }

  /**
   * A callback to render different row column span
   * Your callback will always have the "item" argument which you can use to decide on the colspan
   * Your return must always be in the form of:: return { columns: {}}
   */
  renderDifferentColspan(item: any) {
    if (item.id % 2 === 1) {
      return {
        columns: {
          duration: {
            colspan: 3 // "duration" will span over 3 columns
          }
        }
      };
    } else {
      return {
        columns: {
          0: {
            colspan: '*' // starting at column index 0, we will span accross all column (*)
          }
        }
      };
    }
  }
}