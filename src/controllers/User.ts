import { Request, Response } from 'express';
import { UserModel } from './../models/';

class User {
    show(req: Request, res: Response): void {
        const { id } = req.params;

        UserModel.findById(id).exec()
            .then(user => {
                if (user === null) {
                    res.json({ status: 400, message: 'Not found.' })
                } else {
                    res.json(user);
                }
            })
            .catch(err => res.json(err))
    }

    create(req: Request, res: Response): void {
        const { fullname, email, password } = req.body;
        const newUser = new UserModel({ fullname, email, password });
    
        newUser.save()
            .then(user => res.json({ status: 200, message: 'User created', user }))
            .catch(err => res.json(err))
    }

    delete(req: Request, res: Response): void {
        const { id } = req.params;

        UserModel.findByIdAndRemove(id).exec()
            .then(user => {
                if (user === null) {
                    res.json({ status: 400, message: 'Not found.' })
                } else {
                    res.json({ status: 200, message: 'User deleted', user });
                }
            })
            .catch(err => res.json(err))
    }
}

export default User;