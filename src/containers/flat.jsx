import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';


class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${this.props.flat.imageUrl}')`
    };

    let classes = "flat card";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected"; // add one more class if selectedFlat, needs mapReduxStateToProps
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) { // needed to be able to send selectFlat to props
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat // use this to be able to use selectedFlat in classes
  };
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
