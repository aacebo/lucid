import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

export default function isAuthOrRedirect(next: GetServerSideProps, redirectTo = '/') {
  const cb: GetServerSideProps = async (ctx) => {
    const session = await getSession({ req: ctx.req });

    if (!session) {
      ctx.res.writeHead(302, { Location: redirectTo });
      ctx.res.end();
    }

    return next(ctx);
  };

  return cb;
}
