import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <button
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                    >
                        Select
                    </button>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div>
                {
                    this.renderList()
                }
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    // passed to the above component as props
    return { songs: state.songs };
}
// selectSong action creater is also sent as a prop
export default connect(mapStateToProps, { selectSong })(SongList);