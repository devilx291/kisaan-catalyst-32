
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

interface GovernmentSchemeProps {
  name: string;
  nameHindi?: string;
  description: string;
  ministry: string;
  eligibility: string[];
  benefits: string[];
  link: string;
  logo: string;
}

const GovernmentScheme: React.FC<GovernmentSchemeProps> = ({
  name,
  nameHindi,
  description,
  ministry,
  eligibility,
  benefits,
  link,
  logo
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-0">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 p-2 bg-white rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
            <img 
              src={logo} 
              alt={name} 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/64x64?text=Govt";
              }}
            />
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            {nameHindi && (
              <p className="text-sm text-gray-600 dark:text-gray-400 font-noto">{nameHindi}</p>
            )}
            <CardDescription>
              {ministry}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex-grow">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-xs list-disc pl-5 space-y-1">
              {eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Benefits:</h4>
            <ul className="text-gray-600 dark:text-gray-400 text-xs list-disc pl-5 space-y-1">
              {benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-3 flex justify-between items-center">
        <p className="text-xs text-gray-500">
          <span className="font-noto">सभी किसान अपना कागजात तैयार रखे</span>
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-primary hover:bg-primary hover:text-white"
          onClick={() => window.open(link, '_blank')}
        >
          Apply <ExternalLink size={14} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GovernmentScheme;
