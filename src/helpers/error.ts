// import { Response } from 'express';

// const handleError = (err: unknown, res: Response) => {
//   if (err instanceof GenericError || err instanceof NotFoundError) {
//     const { statusCode, message } = err;
//     res.status(statusCode).json({
//       status: 'error',
//       statusCode,
//       message,
//     });
//     return;
//   }
//   res.status(500).json({
//     status: 'error',
//   });
// };

// export { GenericError, NotFoundError, handleError };
