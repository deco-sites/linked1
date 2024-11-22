import { ImageWidget } from "apps/admin/widgets.ts";


export interface Item{
    title?: string;
    icon?: ImageWidget;
    description?: string;
    subTopic?: string[];
    iconArrays?: ImageWidget[];
    button?: string;
};

interface Props {
    /**
     * @title CollapseContent
     */
    items?: Item[];
}

export default function Section({ 
    items = [] 
  }: Props) {

  }