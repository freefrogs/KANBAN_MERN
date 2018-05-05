import React, { PropTypes } from 'react';
import NoteContainer from '../Note/NoteContainer';
import Edit from '../../components/Edit';

// Import Style
import styles from './Lane.css';

const Lane = (props) => {
	const { lane, laneNotes, updateLane, addNote, deleteLane, editLane } = props;
	const laneId = lane.id;

	return (
		<div className={styles.Lane}>
			<div className={styles.LaneHeader}>
				<Edit
					className={styles.LaneName}
					editing={lane.editing}
					value={lane.name}
					onValueClick={() => editLane(lane.id)}
					onUpdate={name => updateLane({ ...lane, name, editing: false })}
				/>
			</div>
			<div className={styles.LaneDelete}>
				<button onClick={() => deleteLane(laneId)}>x</button>
			</div>
			<div className={styles.LaneAddNote}>
				<button onClick={() => addNote({ task: 'New Note' }, laneId)}>Add Note</button>
			</div>
			<NoteContainer
				notes={laneNotes}
				laneId={laneId}
			/>
		</div>
	);
};

Lane.propTypes = {
	lane: PropTypes.object,
	laneNotes: PropTypes.array,
	addNote: PropTypes.func,
	updateLane: PropTypes.func,
	deleteLane: PropTypes.func,
	editLane: PropTypes.func,
};

export default Lane;