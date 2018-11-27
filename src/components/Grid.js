import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

export class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 10,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 4
  };

  constructor(props) {
    super(props);
    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: i % 4,
        y: Math.floor(i / 6) * y,
        w: 1,
        h: 1,
        i: i.toString()
      };
    });
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.defaultProps}
      >
        {this.props.items}
      </ReactGridLayout>
    );
  }
}
