import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';

export function addNote(req, res) {
	const {note, laneId} = req.body;

	if (!note || !note.task || !laneId) {
		res.status(400).end();
	}

	const newNote = new Note({
		task: note.task,
	});

	newNote.id = uuid();
	newNote.laneId = laneId;
	newNote.save((err, saved) => {
		if (err) {
			res.status(500).send(err);
		}
		Lane.findOne({id: laneId}).then(lane => {
				lane.notes.push(saved);
				return lane.save();
			}).then(() => {
				res.json(saved);
			});
	});
}

export function deleteNote(req, res) {
	Note.findOneAndRemove({id: req.params.noteId}).exec((err, note) => {
		if (err) {
			res.status(500).send(err);
		}

		Lane.findOne({id: note.laneId})
			.then(lane => {
				const notesArray = lane.notes.filter(singleNote => singleNote.id !== req.params.noteId);
				lane.update({notes: notesArray}, (err, resp) => {
					if (err) {
						res.status(500).send(err);
					}
					res.status(200).end();
				});
			});
	});
}