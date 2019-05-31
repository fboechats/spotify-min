import React, { Component } from 'react';
import PropTypes from 'proptypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import Loading from '../../components/Loading';

import { Container, Title, List, PlayList } from './styles';

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {}

  render() {
    const { playlists } = this.props;

    return (
      <Container>
        <Title>Navegar {playlists.loading && <Loading />}</Title>

        <List>
          {playlists.data.map(playlist => (
            <PlayList key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </PlayList>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
