import * as React from "react";
import clsx from "classnames";
import Image from "next/image";
import { EyeIcon, ThumbsupIcon } from "@primer/octicons-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tags: string[];

  author: string;
  authorImage: string;
  authorRole: string;
  likes: number;
  views: number;

  slug: string;
  created: string;
  edited: boolean;
}

const FlashCardPreview: React.FC<Props> = ({
  title,
  description,
  tags,
  author,
  authorImage,
  authorRole,
  likes,
  views,
  slug,
}) => {
  return (
    <Link href={slug}>
      <div
        className={clsx({
          "group relative box-border inline-block overflow-hidden": true,
          "bg-slate-50 dark:bg-slate-800": true,
          "w-full cursor-pointer rounded-lg": true,
          "border border-slate-200 dark:border-slate-700": true,
          "hover:border-slate-400 dark:hover:border-slate-500": true,
        })}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <div className="break-all">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-xl font-bold">{title}</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <ThumbsupIcon size={16} />
                  <p className="text-xs">{likes}</p>
                </div>
                <div className="flex items-center gap-1">
                  <EyeIcon size={16} />
                  <p className="text-xs">{views}</p>
                </div>
              </div>
            </div>
            <p className="mt-2 line-clamp-2 max-h-24 overflow-hidden text-ellipsis text-sm text-slate-600 dark:text-slate-400">
              {description}
            </p>
          </div>
          <div className="mt-6">
            <div className="flex gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className={clsx({
                    "rounded-md px-2 py-1": true,
                    "bg-slate-200/50 dark:bg-slate-900": true,
                    "text-xs font-bold": true,
                  })}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex w-full items-center gap-2">
                <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="relative aspect-square h-full w-full">
                    <Image
                      fill
                      src={authorImage}
                      alt="Profile Picture"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </span>
                <div className="flex w-full flex-col">
                  <div className="flex w-full items-center justify-between text-sm font-bold">
                    <p>{author}</p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlashCardPreview;
