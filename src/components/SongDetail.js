import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    const songDetail = song ? song.title : '';
    return <h1>{songDetail}</h1>
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);