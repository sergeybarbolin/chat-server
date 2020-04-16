import { Request, Response } from 'express';
import { DialogModel } from './../models/';

class Dialog {
    index(req: Request, res: Response): void {
        const authorId: string = req.params.id;

        DialogModel.find().or([{ author: authorId }, { partner: authorId }])
            .then(data => {
                if (data === null) {
                    res.json({ status: 400, message: 'Not found.' })
                } else {
                    res.json(data);
                }
            })
            .catch(err => res.json(err))
    }

    create(req: Request, res: Response): void {
        const { author, partner } = req.body;
        const newDialog = new DialogModel({ author, partner });
    
        newDialog.save()
            .then(data => res.json({ status: 200, message: 'Dialog created', data }))
            .catch(err => res.json(err))
    }

    delete(req: Request, res: Response): void {
        const { id } = req.params;

        DialogModel.findByIdAndRemove(id).exec()
            .then(data => {
                if (data === null) {
                    res.json({ status: 400, message: 'Not found.' })
                } else {
                    res.json({ status: 200, message: 'Dialog deleted', user });
                }
            })
            .catch(err => res.json(err))
    }
}

export default Dialog;