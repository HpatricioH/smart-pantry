import Image from "next/image"
import { Card } from "../../lib/utils/card"
import { Button } from "../../lib/utils/button"
import { Badge } from "../../lib/utils/badge"
import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "../../lib/utils/item"

interface CompactItemCardProps {
  title: string,
  category: string,
  image: string
  actionLabel?: string,
  onActionClick?: () => void,
  children?: React.ReactNode,
  expire: string
}

export default function CompactItemCard({
  title,
  category,
  image,
  actionLabel,
  onActionClick,
  children,
  expire,
}: CompactItemCardProps) {
  return (
    <Card className="shadow-2xs p-1 mt-2">
      <Item className="p-1">
        <ItemHeader>
          <Image
            src={image}
            alt={image}
            width={50}
            height={50}
            className="rounded-md"
          />
          <ItemContent className="gap-0">
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>
              {category}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            {actionLabel === "restock" ?
              <Button
                variant="link"
                onClick={onActionClick}
              >
                Add to list
              </Button>
              :
              <Badge
                className={`${actionLabel === 'restock' ? 'bg-[#E6F4EE]' : 'bg-[#FFF3D6]'} text-text-secondary`}
              >
                {expire} days left
              </Badge>
            }
          </ItemActions>
        </ItemHeader>
      </Item>
    </Card>
  )
}
