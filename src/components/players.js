import React from 'react';
import { connect } from 'react-redux';
import { fetchSeasonAverages } from '../reducers/seasaonAveragesReducer';

const SeasonAverage = props => {
  return (
    <ul>
      {props.visibleNotes.map(note => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => props.toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

const notesToShow = ({ notes, filter }) => {
  if (filter === 'ALL') {
    return notes;
  }
  return filter === 'IMPORTANT'
    ? notes.filter(note => note.important)
    : notes.filter(note => !note.important);
};

const mapStateToProps = state => {
  return {
    visibleNotes: notesToShow(state)
  };
};

const mapDispatchToProps = {
  toggleImportanceOf
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
