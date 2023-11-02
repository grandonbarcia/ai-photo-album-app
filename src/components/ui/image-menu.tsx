import { User, FolderPlus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from '../icons/menu';
import { AddToAlbumDialog } from './add-to-album-dialog';
import { SearchResult } from '@/app/gallery/page';
import { useState } from 'react';

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
