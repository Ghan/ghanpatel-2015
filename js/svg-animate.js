// imports SVG from external path, then animates it

var SvgAnimate = React.createClass({
  getInitialState: function() {
    return {
      svgElem: ''
    };
  },
  componentDidMount: function() {
    $.get(this.props.url, null, function (data) {
      var svgNode = $("svg", data);
      var docNode = document.adoptNode(svgNode[0]);
      docNode.setAttribute("id", this.props.id);
      var tmp = document.createElement("div");
      
      tmp.appendChild(docNode);

      if (this.isMounted()) {
        this.setState({
          svgElem: tmp.innerHTML
        });
        elem = new Vivus(this.props.id, {type: 'delayed', duration: this.props.duration, forceRender: false});
      }

    }.bind(this), 'xml');
  },
  render: function() {
    return (
      <span dangerouslySetInnerHTML={{__html: this.state.svgElem}}/>
    );
  }
});

React.render(
  <SvgAnimate url="/assets/svg/white-king.svg" id="white-king" duration="100" />,
  document.getElementById('content')
);