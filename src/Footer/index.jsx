import React, { memo } from 'react';

function Footer() {
  return (
    <footer className="flex justify-between gap-8 w-full px-8 py-2 bg-blue-600 text-white">
      <div>
        <span>TODO</span>
      </div>
      <div>
        <code className="text-xs">by Jay Kanjia</code>
      </div>
    </footer>
  );
}

export default memo(Footer);
